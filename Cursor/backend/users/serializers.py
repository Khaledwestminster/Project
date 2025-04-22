from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password

class UserSerializer(serializers.ModelSerializer):
    fullName = serializers.CharField(write_only=True, required=True)
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    
    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'fullName')
        extra_kwargs = {
            'email': {'required': True},
        }

    def create(self, validated_data):
        # Split full name into first and last name
        full_name = validated_data.pop('fullName', '').split(' ', 1)
        first_name = full_name[0]
        last_name = full_name[1] if len(full_name) > 1 else ''

        # Create user with email as username
        user = User.objects.create(
            username=validated_data['email'],
            email=validated_data['email'],
            first_name=first_name,
            last_name=last_name
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret['fullName'] = f"{instance.first_name} {instance.last_name}".strip()
        return ret 